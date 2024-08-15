import TitlePage from '@/components/TitlePage';
import CardOne from '@/components/Dashboard/CardOne';
import CardTwo from '@/components/Dashboard/CardTwo';
import CardThree from '@/components/Dashboard/CardThree';
import { montserrat } from '@/utils/fonts';

export default function Home() {
  return (
    <div>
      <TitlePage value={'DASHBOARD'} />
      <div className={`mx-auto ${montserrat.className} w-full`}>
        <CardOne />
        <div className="flex mmd:flex-row flex-col  max-w-[800px] mx-auto mt-[12px] mmd:mt-[16px] gap-[12px] mmd:gap-[16px]">
          <CardTwo />
          <CardThree />
        </div>
      </div>
    </div>
  );
}
