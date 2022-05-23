import { useRouter } from 'next/router';
import HomeRender from "components/home/HomeRender"

export default function home() {
	const router = useRouter();

	return(
        <HomeRender rol={router.query.rolHome}/>
    );
}