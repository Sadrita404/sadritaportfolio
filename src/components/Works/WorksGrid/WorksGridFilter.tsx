

interface Props {
    activeCategory: string[];
    setActiveCategory: (activeCategory: string[]) => void;
}

const categories = [
    "All"
]

export default function WorksGridFilter({
    activeCategory,
    setActiveCategory
}: Props) {

    const handleSelect = (category: string) => {
        setActiveCategory(["All"]);
    };

    return (
        <div className="fixed left-[10px] sm:left-[20px] lg:left-[50px] top-[130px] lg:top-[150px] flex gap-[10px] z-[20]">
            {categories.map((category, index) => (
                <button key={index} className={`${activeCategory.includes(category) ? "text-white font-ppsemibold text-md" : "text-white/50 font-ppsemibold text-md cursor-pointer hover:opacity-50"} transition-all duration-150`} onClick={() => handleSelect(category)}>{category}</button>
            ))}
        </div>
    )
}