import { useRouter } from 'next/router';
import RegistroAcudiente from 'components/registros/registroAcudiente/RegistroAcudiente';
import RegistroAuxiliar from 'components/registros/registroAuxiliar/RegistroAuxiliar';
import RegistroMedico from 'components/registros/registroMedico/RegistroMedico';

export default function registro() {
    const router = useRouter();
    
    if (router.query.rol == "acudiente") {
        return (
          <>
            <RegistroAcudiente />
          </>
        );
      } else if (router.query.rol == "auxiliar") {
        return (
          <>
            <RegistroAuxiliar />
          </>
        );
      } else if (router.query.rol == "medico") {
        return (
          <>
            <RegistroMedico />
          </>
        );
      } else {
        return (
          <>
            <div>
              <p className="text fs-1">Error {router.query.rol}</p>
            </div>
          </>
        );
      }
}