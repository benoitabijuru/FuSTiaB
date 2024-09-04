

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       <main>
          <div>
              <div className="">
                   {children}
              </div>
          </div>
       </main>
    );
  }
  