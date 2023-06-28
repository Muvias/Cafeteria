import { Card } from "./Card";

import cafe from '../assets/coffeeShop.jpg';
import secondCafe from '../assets/SecondCoffeeShop.jpg';
import peopleTalking from '../assets/peopleTalking.jpg';


export function Services() {
    return (
        <section className="flex flex-col justify-center gap-8 md:px-48 md:py-24 px-6 py-16">
            <h2 className="text-4xl font-semibold">Nossos serviços</h2>

            <div className="flex flex-col md:flex-row gap-8">
                <Card
                    imageUrl={cafe}
                    imgDescription="UmTexto"
                    title="Design de interiores"
                    description="Crie um ambiente acolhedor e aconchegante para seus clientes com a ajuda de nossos designers especializados em projetos de interiores para cafeterias."
                />
                <Card
                    imageUrl={peopleTalking}
                    imgDescription="UmTexto"
                    title="Social media marketing"
                    description="Promova seus produtos e serviços para um público novo e mais amplo através de campanhas eficazes de mídia social projetadas por nossa equipe de especialistas."
                />
                <Card
                    imageUrl={secondCafe}
                    imgDescription="UmTexto"
                    title="Gestão de reputação online"
                    description="Controle sua imagem online gerenciando comentários, avaliações e feedback de clientes com nossa experiência em gestão de reputação online para estabelecimentos gastronômicos."
                />
            </div>
        </section>
    )
}