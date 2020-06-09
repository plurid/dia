import React, {
    useState,
} from 'react';

import {
    uuid,
} from '@plurid/plurid-functions';

import {
    StyledDropdown,
    StyledSelected,
    StyledSelectedMark,
    StyledSelectables,
    StyledSelectable,
} from './styled';



interface DropdownProperties {
    value: string;
    selectables: string[];

    atChange: any;
}

const Dropdown: React.FC<DropdownProperties> = (
    properties,
) => {
    /** properties */
    const {
        value,
        selectables,
        atChange,
    } = properties;


    /** state */
    const [showSelectables, setShowSelectables] = useState(false);


    /** render */
    return (
        <StyledDropdown
        >
            <StyledSelected
                value={value}
                showSelectables={showSelectables}
                onClick={() => setShowSelectables(show => !show)}
            >
                <div>
                    {value || 'Select...'}
                </div>

                <StyledSelectedMark>
                    ▾
                </StyledSelectedMark>
            </StyledSelected>

            {showSelectables && (
                <StyledSelectables
                >
                    {selectables && selectables.map(selectable => {
                        return (
                            <StyledSelectable
                                key={uuid.generate()}
                                onClick={() => {
                                    setShowSelectables(false);
                                    atChange(selectable);
                                }}
                            >
                                {selectable}
                            </StyledSelectable>
                        );
                    })}
                </StyledSelectables>
            )}
        </StyledDropdown>
    );
}


export default Dropdown;
