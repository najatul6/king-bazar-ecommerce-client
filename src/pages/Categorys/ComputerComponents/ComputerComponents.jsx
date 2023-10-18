import ComputerComponentsCard from "./ComputerComponentsCard";
import { FiChevronsRight } from "react-icons/fi";
const ComputerComponents = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-4xl font-semibold mt-10 text-[#f16022] flex gap-2 items-center">Electronics <FiChevronsRight></FiChevronsRight> </h2>
            <hr className="h-1 w-[170px] md:w-[240px] bg-[#f16022] border-none rounded-xl mb-7" />
            <ComputerComponentsCard></ComputerComponentsCard>
        </div>
    );
};

export default ComputerComponents;