import Button from '@mui/material/Button';
import DangerousIcon from '@mui/icons-material/Dangerous';
import { ModalContainer, button, circle, Title } from "./styles";
import { Section } from "./styles";

export default function ModalEditFail() {

    return (
        <Section>
            <ModalContainer>
                <Title>Houve um erro ao editar o projeto!</Title>
                <DangerousIcon sx={ circle } />
                <Button variant="contained" sx={ button }
                    
                >voltar para projetos</Button>
            </ModalContainer>
        </Section>

    )

}