import type { StepProps } from "./StepProps";


export default function StoryStep({ data, onChange }: StepProps) {
  return (
    <textarea
      value={data.story}
      onChange={e => onChange('story', e.target.value)}
      placeholder="스토리를 입력하세요"
      className="w-full h-64 border p-4 rounded"
    />
  );
}
