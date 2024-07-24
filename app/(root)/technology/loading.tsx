import RouteHero from '@/components/hero/RouteHero';
import Search from '@/components/shared/Search';


const loading = async () => {

  return (
    <div className="mx-20">
        <RouteHero/>
        <div className="mx-20 py-10">
        <Search />
        </div>
        <div className="py-5">
        </div>
        
      </div>
  );
};

export default loading;
