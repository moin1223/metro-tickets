import React, { useContext } from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Search from './Search/Search ';
import { Col, Container, Row } from 'react-bootstrap';
import SearchResult from './SearchResult/SearchResult';
import { UserContext } from '../../App';

const Destination = () => {
    const [search,setSearch] = useContext(UserContext);
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    {search?.isSearched ? <SearchResult /> : <Search />}
                </Col>
                <Col xs={12} md={8}>
                    <GoogleMap />
                </Col>
            </Row>
        </Container>

    );
};

export default Destination;