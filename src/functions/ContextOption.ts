import { createContext, SetStateAction, Dispatch } from 'react';

interface TypesContext {
    optionValues: Object;
    setOptionValues: Dispatch<SetStateAction<Object>>;
}

const OptionContext = createContext<TypesContext>({
    optionValues: {},
    setOptionValues: () => { },
});
export default OptionContext