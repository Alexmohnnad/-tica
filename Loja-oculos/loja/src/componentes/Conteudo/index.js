import Capa from './secaocapa';
import Sobre from './secaosobre';
import Produtos from './secaoprod';
import Contatos from './secaocontato';

export default function Conteudo() {
  return (
    <main>
      <Capa />
      <Produtos />
      <Sobre />
      <Contatos />
    </main>
  )
}