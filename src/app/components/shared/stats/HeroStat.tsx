import { motion } from 'framer-motion';
import NumberTicker from '@/app/components/shared/NumberTicker';

function HeroStat({
  icon,
  value,
  label,
  delay,
  valueColor = 'text-white',
  labelColor = 'text-slate-200',
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
  valueColor?: string;
  labelColor?: string;
}) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-1.5">{icon}</div>
      <div className={`text-2xl md:text-3xl font-extrabold ${valueColor} mb-0.5 flex justify-center items-center`}>
        {!isNaN(numericValue) ? (
          <>
            <NumberTicker value={numericValue} />
            <span>{suffix}</span>
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className={`text-[11px] md:text-xs font-semibold ${labelColor} uppercase tracking-wider`}>
        {label}
      </div>
    </motion.div>
  );
}

export default HeroStat;
