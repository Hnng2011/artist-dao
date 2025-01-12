import { ChevronDownIcon } from 'lucide-react';

const Testimonial = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="relative overflow-hidden border-[#FFD700] border-[1px]">
      <details className="peer group max-h-96 w-full overflow-hidden transition-all duration-500">
        <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 transition-all duration-300 group-open:pt-8 group-open:pl-8">
          <h6 className="font-medium text-lg text-[#FFD700] tracking-tighter">
            {title}
          </h6>
          <ChevronDownIcon className="group-open:-rotate-180 absolute top-5 right-5 size-5 text-[#FFD700] transition-all" />
        </summary>
      </details>

      <div className="max-h-0 overflow-hidden transition-all duration-500 peer-open:max-h-40">
        <p className="rounded-2xl p-6 text-[#FFD700]/60">{content}</p>
      </div>
    </div>
  );
};

export default Testimonial;
