
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
            <div className="bg-[#f16022] border-2 mt-10 mb-1 py-2">
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-white uppercase">categories</h2>
            </div>

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