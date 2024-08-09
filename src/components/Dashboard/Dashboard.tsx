import CardOne from "@/components/Dashboard/CardOne";
import CardTwo from "@/components/Dashboard/CardTwo";
import CardThree from "@/components/Dashboard/CardThree";

const Dashboard = () => {
    return (
        <div className="z-10 mx-auto font-montserrat w-full">
            <CardOne/>
            <div className='flex mmd:flex-row flex-col justify-between max-w-[800px] mx-auto mt-[16px] gap-4'>
                <CardTwo/>
                <CardThree/>
            </div>
        </div>
    )
}
export default Dashboard
