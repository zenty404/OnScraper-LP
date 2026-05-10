"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                        "border-2 border-gray-200 bg-white",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        {
                            "shadow-xl -translate-y-1": item.hasPersistentHover,
                        }
                    )}
                >
                    {/* Dot pattern background */}
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(9,43,126,0.03)_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>

                    <div className="relative flex flex-col space-y-4">
                        {/* Header with icon */}
                        <div className="flex items-start">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#092B7E] to-[#0D3AA1] shadow-lg transition-transform duration-300 group-hover:scale-110">
                                {item.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <h3 className="font-bold text-gray-900 tracking-tight text-xl">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Footer with tags and status */}
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                            <div className="flex items-center flex-wrap gap-2 text-xs">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium transition-all duration-200 hover:bg-[#092B7E] hover:text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {(item.meta || item.status) && (
                                <div className="flex items-baseline gap-2">
                                    {item.meta && (
                                        <span className="text-2xl font-bold bg-gradient-to-r from-[#092B7E] to-[#0D3AA1] bg-clip-text text-transparent">
                                            {item.meta}
                                        </span>
                                    )}
                                    {item.status && (
                                        <span className="text-sm text-gray-600 font-medium">
                                            {item.status}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Gradient border on hover */}
                    <div
                        className={`absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-[#092B7E]/20 via-[#0D3AA1]/10 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
}

export { BentoGrid };
