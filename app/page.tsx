import InformationHeader from 'components/Information/InformationHeader';
import ShopHeaderMainPage from 'components/Information/ShopHeaderMainPage';
import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'Dreuge worst webshop',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <InformationHeader />
      <ShopHeaderMainPage />
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
