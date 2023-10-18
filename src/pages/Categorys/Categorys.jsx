
import ComputerAccessories from "./Computer/ComputerAccessories";
import ComputerComponents from "./ComputerComponents/ComputerComponents";
import ComputerMonitors from "./ComputerMonitors/ComputerMonitors";
import ComputerNetworking from "./ComputerNetworking/ComputerNetworking";
import ComputerServers from "./ComputerServers/ComputerServers";
import DataStorage from "./DataStorage/DataStorage";
import LaptopAccessories from "./LaptopAccessories/LaptopAccessories";
import PowerStrip from "./PowerStrip/PowerStrip";
import Printer from "./Printer/Printer";
import Scaner from "./Scaner/Scaner";

const Categorys = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-center mt-10 mb-1 text-[#f16022]">Category</h2>
            <hr className="h-1 w-1/2 bg-[#f16022] border-none rounded-xl mx-auto mb-10"/>
            <ComputerAccessories></ComputerAccessories>
            <ComputerComponents></ComputerComponents>
            <LaptopAccessories></LaptopAccessories>
            <ComputerMonitors></ComputerMonitors>
            <ComputerNetworking></ComputerNetworking>
            <PowerStrip></PowerStrip>
            <Printer></Printer>
            <Scaner></Scaner>
            <ComputerServers></ComputerServers>
            <DataStorage></DataStorage>
        </div>
    );
};

export default Categorys;