interface Props {
  percent: number;
  colorClass: string;
}

export function ProgressBar({ percent, colorClass }: Props) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${colorClass.split(" ")[0].replace("text-", "bg-")}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}