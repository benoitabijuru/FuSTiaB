 
// helpers/index.js
import { mg } from "./mailgun";
 
export async function addToSubscribersList(email, confirmationCode = "") {
  try {
    const varsOption = confirmationCode ? { vars: { confirmationCode } } : {};
    const data = await mg.lists.members.createMember(
      process.env.MAILGUN_SENDER_EMAIL,
      {
        address: email,
        subscribed: "no",
        upsert: "yes",
        ...varsOption,
      }
    );
    return data;
  } catch (error) {
    throw error.message || "Failed to add your email to the subscriber's list";
  }
}
 
export async function getSubscriptionListMember(email) {
  try {
    const data = await mg.lists.members.getMember(
      process.env.MAILGUN_SENDER_EMAIL,
      email
    );
    return data;
  } catch (error) {
    return null;
  }
}
 
export async function sendSubscriptionConfirmationMail(email, confirmationURL) {
  try {
    const data = await mg.messages.create(process.env.MAILGUN_SENDER_DOMAIN, {
      from: "Newsletter <newsletter@tegathedev.xyz>",
      to: [email],
      subject: "Confirm newsletter subscription",
      html: `Greetings! <p>We are delighted to have you as a new subscriber to our newsletter.</p> <p>To finalize your subscription, kindly confirm it by clicking on the following <a href="${confirmationURL}">link</a>.</p> <p>Thank you for joining our community!</p>`,
    });
    return data;
  } catch (error) {
    throw error.message || "Failed to send confirmation email";
  }
}
 
export function getHostURL() {
  return process.env.HOST;
}
 
export function getConfirmationURL(email, confirmationCode) {
  let hostURL = getHostURL();
  const urlParams = new URLSearchParams({
    confirmationCode: confirmationCode,
    email: email,
  });
  const confirmationURL = `${hostURL}/confirm-subscription?${urlParams}`;
  return confirmationURL;
}
 
export async function confirmSubscription(email, confirmationCodeFromRequest) {
    try {
      const user = await getSubscriptionListMember(email);
      if (!user) throw new Error("This email does not exist in our mailing list");
      const { vars } = user;
      const { confirmationCode } = vars;
      if (confirmationCode !== confirmationCodeFromRequest) {
        throw new Error("Confirmation code is invalid");
      }
      if (user.subscribed)
        return {
          emailConfirmed: true,
          message: "You're already subscribed to the newsletter!",
        };
      await mg.lists.members.updateMember(
        process.env.MAILGUN_SENDER_EMAIL,
        email,
        {
          subscribed: true,
        }
      );
      return {
        emailConfirmed: true,
        message: "You've successfully subscribed to the newsletter!",
      };
    } catch (error) {
      return {
        emailConfirmed: false,
        message: error.message || "Failed to confirm your subscription",
      };
    }
  }
   