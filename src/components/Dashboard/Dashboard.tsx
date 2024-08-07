import CardOne from "@/components/Dashboard/CardOne";
import CardTwo from "@/components/Dashboard/CardTwo";
import CardThree from "@/components/Dashboard/CardThree";

const Dashboard = () => {
    return (
        <div className="z-50 mx-auto font-montserrat w-full">
            <CardOne/>
            <div className='flex justify-between max-w-[800px] mx-auto mt-[16px]'>
                <CardTwo/>
                <CardThree/>
            </div>
        </div>
    )
}
export default Dashboard
