import HistoriaClinica from "components/historiaClinica/HistoriaClinica"
import { useRouter } from 'next/router';

export default function historiaClinica() {
    const router = useRouter();

    return(
        <>
            <HistoriaClinica infante={router.query.infante}/>
        </>
    )
}