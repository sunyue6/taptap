import TabCreate from "@/components/Worker/TabCreate";
import TabWorker from "@/components/Worker/TabWorker";
import Tabs from "@/components/Common/Tabs";

const Worker = () => {
    const tabData = [
        {
            label: 'Create',
            content: <TabCreate/>,
        },
        {
            label: 'My Workers(4)',
            content: <TabWorker/>,
        },

    ]
    return (
        <>
            <Tabs tabs={tabData}/>
        </>
    )
}
export default Worker
