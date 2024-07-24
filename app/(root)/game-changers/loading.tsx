import RouteHero from '@/components/hero/RouteHero';
import Search from '@/components/shared/Search';


const loading = async () => {
  return (
    <div className='mx-20'>
      <p>Game Changers, We consider those Inventors who invented new field and new technology those who pushed humanity forward, may be scientists or engineers. Indeed, we consider founders, those who founded game changing venture which lead the innovation, we also consider those upcomming solving a big future problem. Finaly we consider those who changed investment field and invest in future of technology.</p>
      
      <div className="">
      <RouteHero/>
        <div className="mx-20">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default loading