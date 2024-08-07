import CardOne from "@/components/Dashboard/CardOne";
import CardTwo from "@/components/Dashboard/CardTwo";
import CardThree from "@/components/Dashboard/CardThree";

const Dashboard = () => {
    return (
        <div className="z-20 mx-auto font-montserrat w-full px-4 md:px-16">
            <CardOne/>
            <div className='flex flex-col md:flex-row justify-between max-w-[800px] mx-auto mt-[16px] gap-4'>
                <CardTwo/>
                <CardThree/>
            </div>
        </div>
    )
}
export default Dashboard
