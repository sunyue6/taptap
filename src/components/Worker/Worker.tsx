import TabCreate from "@/components/Worker/TabCreate";
import TabWorker from "@/components/Worker/TabWorker";
import Tabs from "@/components/Common/Tabs";

const Worker = () => {
    const tabData = [
        {
            label: 'Create',
            content: <TabWorker/>, //TODO TabCreate
        },
        {
            label: 'My Workers(4)',
            content: <TabWorker/>, // TabWorker
        },

    ]
    return (
        <div className="mx-auto max-w-[800px] min-w-[343px] w-full">
            <Tabs tabs={tabData}/>
        </div>
    )
}
export default Worker
