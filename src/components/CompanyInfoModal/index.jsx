import { Container } from './styles';
import {IoClose} from 'react-icons/io5'

function CompanyInfoModal({companyInfo, setIsMenuOpen, isMenuOpen}) {

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function phoneMask(number){

    if(!companyInfo?.phone){
      return
    }

    if(number.length < 11){
      return "Telefone Incompleto"
    }

    var x = number.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    return '(' + x[1] + ')' + x[2] + '-' + x[3];
  }

  return (
    companyInfo.name &&
    <Container isMenuOpen={isMenuOpen}>
      <span onClick={() => setIsMenuOpen(false)}>
        <IoClose/>
      </span>
      <div>
        <h6>{companyInfo?.name}</h6>
      </div>

      <div>
        <h6>Endereço</h6>
        <p>{companyInfo?.address}</p>
      </div>

      <div>
        <h6>Telefone</h6>
        <p>{phoneMask(companyInfo?.phone ?? "00000000000")}</p>
      </div>

      <div>
        <h6>Horários</h6>
        {
          companyInfo?.hours &&
          companyInfo.hours
          .replaceAll("\t", ": ")
          .split("\n")
          .map((hour, index) => <div key={index}>{capitalize(hour)}</div>)
        }
      </div>

      <div>
        <h6>Localização</h6>
        <button>
          <a href={companyInfo.location}>Abrir Maps</a>
        </button>
      </div>

    </Container>
  );
};

export default CompanyInfoModal;
