// src/components/InstrumentCard.tsx
import Image from 'next/image';
import { Instrument } from '@/data/instruments';

interface InstrumentCardProps {
  instrument: Instrument;
}

const InstrumentCard = ({ instrument }: InstrumentCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-light-content dark:bg-dark-content rounded-lg overflow-hidden shadow-md">
      <div className="relative h-80 w-full">
        <Image
          src={instrument.imageUrl}
          alt={`Image of ${instrument.name}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold">{instrument.name}</h3>
        <p className="mt-4 text-sm opacity-80">{instrument.description}</p>
        <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-6">
          <h4 className="font-semibold mb-4">Key Specifications</h4>
          <ul className="space-y-2 text-sm">
            {instrument.specs.map(spec => (
              <li key={spec.label} className="flex justify-between">
                <span className="opacity-70">{spec.label}:</span>
                <span className="font-medium">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InstrumentCard;