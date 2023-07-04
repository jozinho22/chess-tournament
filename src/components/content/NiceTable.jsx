import React from 'react';
import { Container, Table } from 'react-bootstrap';

const NiceTable = ( {children} ) => {

    const memoizedTable = 
            React.useMemo(() => (
                    <Container className={`NiceTableContainer`} >
                        <Table responsive striped bordered>
                            {children}
                        </Table>
                    </Container>
            ), [children]);

    return memoizedTable;
}

export default NiceTable;