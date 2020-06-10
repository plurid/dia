import React from 'react';

import {
    StyledUpload,
    StyledUploadLabel,
    StyledName,
    StyledSign,
} from './styled';

import {
} from '../../../../../data/constants';



interface UploadProperties {
    value: string;
    atChange: any;
    accept?: string[];
}

const Upload: React.FC<UploadProperties> = (
    properties,
) => {
    /** properties */
    const {
        value,
        atChange,
        accept,
    } = properties;


    /** render */
    return (
        <StyledUpload
        >
            <input
                type="file"
                id="upload-file"
                accept={accept?.join(',')}
                onChange={(event) => atChange(event)}
            />

            <StyledUploadLabel
                htmlFor="upload-file"
                value={value}
            >
                <StyledName
                    value={value}
                >
                    {value || 'Upload'}
                </StyledName>

                <StyledSign
                    value={value}
                >
                </StyledSign>
            </StyledUploadLabel>
        </StyledUpload>
    );
}


export default Upload;
