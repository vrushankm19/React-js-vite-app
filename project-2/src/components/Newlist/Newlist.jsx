import React, { useEffect, useState } from 'react';

const List = (item) => {
    return (
        <>
          
                            <li key={item.id}>
                                Hi My Name is {item.name}, and My Id is {item.id}
                            </li>
        </>
    );
};

export default List;
