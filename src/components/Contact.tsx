export function Contact() {
    return (
        <section className="flex md:flex-row flex-col justify-between items-center gap-12 md:gap-6 py-16 px-6 md:px-48 md:py-24">
            <div className="md:max-w-[50%] w-full">
                <h2 className="text-3xl font-semibold mb-4">Entre em contato conosco</h2>
                <p>Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
            </div>

            <div className="md:max-w-[50%] w-full">
                <form className="">
                    <div className="flex flex-wrap w-full gap-4">
                        <label htmlFor="" className="flex flex-col flex-1 w-1/2">
                            Nome
                            <input
                                type="text"
                                className="h-7 rounded-sm border border-gray-200 bg-gray-100"
                            />
                        </label>

                        <label htmlFor="" className="flex flex-col flex-1 w-1/2">
                            Email
                            <input
                                type="text"
                                className="h-7 rounded-sm border border-gray-200 bg-gray-100"
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="" className="flex flex-col w-full">
                            Mensagem
                            <textarea
                                name="content"
                                spellCheck={false}
                                className="w-full flex-1 p-2 leading-relaxed rounded border-0 bg-gray-100 focus:ring-0"
                            />
                        </label>
                    </div>

                </form>
            </div >
        </section >
    )
}