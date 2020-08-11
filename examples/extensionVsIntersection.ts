// gives error
// Consider:

interface NumberToStringConverter {
  convert: (value: number) => string;
}

interface BidirectionalStringNumberConverter extends NumberToStringConverter {
  convert: (value: string) => number;
}

// no error
// However, if we employ intersection types

interface NumberToStringConverter = {
    convert: (value: number) => string;
}

type BidirectionalStringNumberConverter = NumberToStringConverter & {
    convert: (value: string) => number;
}