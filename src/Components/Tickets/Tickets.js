import { Container, Row } from 'react-bootstrap';
import tickets from "../../fakeData/fakeData"
import Ticket from '../Ticket/Ticket ';

const Tickets = () => {

    return (
        <>
            <Container className="mt-5 d-flex align-items-center" style={{ minHeight: "80vh" }}>
                <Row>
                    {
                        tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Tickets;
