import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/type";
import { Tab } from "@headlessui/react";
import Image from "next/image";

interface GalleryTabProps {
    image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <Image
                            src={image.url}
                            fill
                            alt={image.id}
                            className="object-cover object-center"
                        />
                    </span>
                    <span
                        className={cn(
                            "absolute inset-0 rounded-md ring-2 ring-offset-2",
                            selected
                                ? "ring-primary-500 ring-offset-primary-100"
                                : "ring-transparent"
                        )}
                    />
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;
