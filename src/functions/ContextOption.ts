import { createContext, SetStateAction, Dispatch } from 'react';

interface TypesContext {
    optionValues: Record<never, object>;
    setOptionValues: Dispatch<SetStateAction<Record<string, never>>>;
}

const OptionContext = createContext<TypesContext>({
    optionValues: {},
    setOptionValues: () => { },
});

export default OptionContext;