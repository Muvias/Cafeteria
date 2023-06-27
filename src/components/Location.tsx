import Image from "next/image";
import MapSP from "../assets/maps.png";

export function Location() {
    return (
        <section className="flex justify-between gap-4 px-48 py-14 bg-[#F3F4F6]">
            <div className="w-full">
                <Image className="w-4/5 object-cover aspect-video" src={MapSP} alt="Imagem mostrando a localização de São Paulo" />
            </div>

            <div className="max-w-[50%] w-full">
                <h2 className="text-3xl font-semibold mb-4">Localização</h2>
                <p>São Paulo, SP</p>
            </div>
        </section>
    )
}