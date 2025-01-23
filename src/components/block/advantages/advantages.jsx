import Title from "@ui/title/title"

export default function Advantages({ advantages }){
    return(
        <section className="advantages">
        {advantages?.length > 0 ? 
        <>
            <Title>Почему фермерские продукты лучше?</Title>
        </>
        :null}
        </section>
    )
}