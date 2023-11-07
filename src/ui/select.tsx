import ReactSelect from 'react-select';
import { type GroupBase } from 'react-select/dist/declarations/src/types';
import { type StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';
import clsx from 'clsx';

const controlStyles = {
    base: 'border rounded-lg bg-white hover:cursor-pointer',
    focus: 'border-primary-600 ring-1 ring-primary-500 focus:outline-none focus:ring focus:border-blue-500',
    nonFocus: 'border-gray-300 hover:border-gray-400',
};

const placeholderStyles = {
    base: 'pl-1 py-0.5',
    focus: 'text-gray-700 text-opacity-75',
    notFocus: 'text-gray-500 text-opacity-50',
};

const optionStyles = {
    base: 'hover:cursor-pointer px-3 py-2 rounded',
    focus: 'bg-gray-100 active:bg-gray-200 text-gray-900',
    selected:
        "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-900",
};

const containerStyles = 'rounded-lg outline-none ring border-blue-500';
const selectInputStyles = 'pl-1 py-0.5 text-black';
const valueContainerStyles = 'p-1 gap-1 cursor-text';
const singleValueStyles = 'leading-7 ml-1 text-black';
const indicatorsContainerStyles = 'p-1 gap-1';
const clearIndicatorStyles =
    'text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800';
const indicatorSeparatorStyles = 'bg-gray-300';
const dropdownIndicatorStyles =
    'p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black';
const menuStyles = 'p-1 mt-2 bg-gray-700 shadow shadow-blue rounded-lg';
const noOptionsMessageStyles = 'bg-gray-700 text-white m-2 border-gray-200';

export const Select = <
    Option = unknown,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>,
>(
    props: StateManagerProps<Option, IsMulti, Group>,
) => (
    <ReactSelect
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        unstyled
        styles={{
            input: (base) => ({
                ...base,
                'input:focus': {
                    boxShadow: 'none',
                },
            }),
            multiValueLabel: (base) => ({
                ...base,
                whiteSpace: 'normal',
                overflow: 'visible',
            }),
            control: (base) => ({
                ...base,
                transition: 'none',
            }),
        }}
        //components={{ DropdownIndicator, ClearIndicator }}
        classNames={{
            container: ({ isFocused }) => clsx(isFocused && containerStyles),
            control: ({ isFocused }) =>
                clsx(
                    isFocused ? controlStyles.focus : controlStyles.nonFocus,
                    controlStyles.base,
                ),
            placeholder: ({ isFocused }) =>
                clsx(
                    isFocused
                        ? placeholderStyles.focus
                        : placeholderStyles.notFocus,
                    placeholderStyles.base,
                ),
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            indicatorsContainer: () => indicatorsContainerStyles,
            clearIndicator: () => clearIndicatorStyles,
            indicatorSeparator: () => indicatorSeparatorStyles,
            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            option: ({ isFocused, isSelected }) =>
                clsx(
                    isFocused && optionStyles.focus,
                    isSelected && optionStyles.selected,
                    optionStyles.base,
                ),
            noOptionsMessage: () => noOptionsMessageStyles,
        }}
        {...props}
    />
);
