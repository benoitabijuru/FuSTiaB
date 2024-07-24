import RouteHero from '@/components/hero/RouteHero';
import Search from '@/components/shared/Search';

const loading = async () => {

  return (
    <div className="mx-20">
    <div >
    <RouteHero/>
    <div className="mx-20">
    <Search />
    </div>
  </div>
</div>
  )
}

export default loading