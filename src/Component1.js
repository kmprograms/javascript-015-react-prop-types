import React from 'react';
import PropTypes from 'prop-types';

// Podobnie jak komponenty klasowe tak i komponenty funkcyjne, tworzone za pomoca React.memo
// oraz React.forwardRef wykorzystuja mechanizm PropTypes

// PropTypes ze wzgledu na wydajnosc sa sprawdzane tylko w trybie developerskim

// Kiedy cos sie nie zgadza z tym co okreslimy w PropTypes wtedy dostajemy ostrzezenie
// w konsoli
class Component1 extends React.Component {
    render() {
        return (
            <h1>PROP: {this.props.prop1}</h1>
        );
    }
}

Component1.propTypes = {
    prop1: PropTypes.string.isRequired,

    prop2: PropTypes.array,

    prop3: PropTypes.bool,

    prop4: PropTypes.func,

    prop5: PropTypes.number,

    prop6: PropTypes.object,

    prop7: PropTypes.string,

    // Wszystko, co może być wyrenderowane: liczby, łańcuchy znaków, elementy czy tablice
    // (lub fragmenty) zawierające te typy.
    prop8: PropTypes.node,

    // Element reactowy
    prop9: PropTypes.element,

    // Komponent reactowy
    prop10: PropTypes.elementType,

    // Sprawdzanie czy mamy instancje klasy
    prop11: PropTypes.instanceOf(Date),

    // Sprawdzanie czy wlasciwosc jest ograniczona do okreslonych wartosci
    prop12: PropTypes.oneOf(['VAL1', 'VAL2']),

    // Sprawdzanie czy wlasciwosc jest ograniczona do okreslonych typow
    prop13: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date)
    ]),

    // Tablica zawierajaca elementy okreslonego typu
    prop14: PropTypes.arrayOf(PropTypes.number),

    // Obiekt zawierający elementy określonego typu.
    prop15: PropTypes.objectOf(PropTypes.number),

    // Obiekt zawierający określone pola.
    prop16: PropTypes.shape({
        key1: PropTypes.string,
        key2: PropTypes.number
    }),


    // Obiekt zawierający tylko wskazane pola.
    prop17: PropTypes.exact({
        key1: PropTypes.string,
        key2: PropTypes.number
    }),

    // Tworzenie niestandardowego walidatora typu
    // Taki walidator powinien zwracac obiekt Error jesli sprawdzanie
    // zakonczy sie niepowodzeniem
    prop18: function(props, propName, componentName) {
        if (!/^prop18$/.test(props[propName])) {
            return new Error(`Nieprawidlowa 1 prop ${props[propName]} w komponencie ${componentName}`);
        }
    },

    // Podobnie mozna zastosowac niestandardowy walidator w przypadku arrayOf lub objectOf
    // Walidator bedzie wywolany dla kazdego klucza w tablicy lub obiekcie
    // Pierwsze dwa argumenty walidatora to walidowana tablica lub obiekt oraz klucz biezacego elementu
    prop19: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
        if (!/^prop19$/.test(propValue[key])) {
            return new Error(`Nieprawidlowa 2 prop ${propFullName} w komponencie ${componentName}`);
        }
    })

}

export default Component1;
