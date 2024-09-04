import SocialLinks from "@/components/shared/SocialLinks";
import { getAllBusinessPost, getBusinessPostBySlug } from "@/lib/actions/businessPost.action";
import { SearchParamsProps } from "@/types";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next';
import { formatDateTime } from "@/lib/utils";
import BusinessCollection from "@/components/shared/BusinessCollection";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const businessPost = await getBusinessPostBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: businessPost.title,
    description: businessPost.description,
    openGraph: {
      images: [businessPost.imageUrl, ...previousImages],
    },
  };
}

const businessPostDetails = async ({ params: { slug }, searchParams }: SearchParamsProps) => {
  const businessPost = await getBusinessPostBySlug(slug);

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const businessArticles = await getAllBusinessPost({
    query: searchText,
    category: '',
    page: 1,
    limit: 6,
  });

  return (
    <>
      <section className="container mx-32 px-10 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          <div className="col-span-1 lg:col-span-8">
            <div>
              <p className="text-[12px] sm:text-[14px] py-2 sm:py-3">
                Business | <span className="text-orange-700">{businessPost.category.name}</span>
              </p>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{businessPost.title}</h1>
              </div>
              <div>
                <p className="py-5 sm:py-8 lg:py-10 text-xl sm:text-2xl lg:text-3xl italic">
                  {businessPost.description}
                </p>
              </div>
              <hr />
              <div className="py-3 sm:py-5">
                <p className="text-yellow-600 text-sm sm:text-base lg:text-lg">
                  {formatDateTime(businessPost.createdAt).dateOnly}
                </p>
              </div>
              <div className="pb-3 sm:pb-5 flex flex-col sm:flex-row justify-between">
                <div className="mb-2 sm:mb-0">
                  <p className="text-base sm:text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">
                    FUSTIAB
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-blue-500 text-sm sm:text-base lg:text-lg mr-2">Share</p>
                  <SocialLinks shareUrl='' title='' />
                </div>
              </div>
              <Image
                src={businessPost.imageUrl}
                alt={businessPost.title}
                width={1000}
                height={1000}
                className="h-[200px] sm:h-[300px] lg:h-[500px] object-cover object-center w-full"
              />
              <p className="text-slate-600 italic py-2">{businessPost.title}</p>
            </div>
            <div className="py-5 sm:py-10">
              <div dangerouslySetInnerHTML={{ __html: businessPost.content }} className="text-base sm:text-xl lg:text-2xl" />
            </div>
            <div className="wrapper my-5 sm:my-8 flex flex-col gap-8 md:gap-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Read More</h2>
              <BusinessCollection
                data={businessArticles?.data  || []}
                emptyTitle="No Tech Article"
                emptyStateSubText="Come back later"
                collectionType="All_BusinessPost"
                limit={3}
                page={searchParams.page as string}
                totalPages={businessArticles?.totalPages}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default businessPostDetails;
