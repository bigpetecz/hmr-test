import * as React from 'react';

export const App: React.FC = () => {
    const [value, setValue] = React.useState<number>(0);

    const addValue = React.useCallback(() => {
        setValue(prevValue => prevValue + 1);
    }, [setValue]);

    return (
        <button type="button" onClick={() => addValue()}>counter: {value}</button>
    );
}
