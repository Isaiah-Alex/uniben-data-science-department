import type { Program, ProgramLevel, ProgramStatus } from "@/db/schema";
import { inputCls, selectCls } from "@/components/admin/fieldStyles";

type FormValues = Omit<Program, "id" | "updatedAt">;

type Props = {
  values: FormValues;
  onChange: (v: FormValues) => void;
  onSubmit: () => void;
  onClose: () => void;
  submitLabel: string;
};

export function ProgramForm({
  values,
  onChange,
  onSubmit,
  onClose,
  submitLabel,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Programme Title
        </label>
        <input
          type="text"
          value={values.title}
          onChange={(e) => onChange({ ...values, title: e.target.value })}
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Level
          </label>
          <select
            value={values.level}
            onChange={(e) =>
              onChange({ ...values, level: e.target.value as ProgramLevel })
            }
            className={selectCls}
          >
            <option>Undergraduate</option>
            <option>Postgraduate</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Status
          </label>
          <select
            value={values.status}
            onChange={(e) =>
              onChange({ ...values, status: e.target.value as ProgramStatus })
            }
            className={selectCls}
          >
            <option>Active</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Duration
          </label>
          <input
            type="text"
            value={values.duration}
            onChange={(e) => onChange({ ...values, duration: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Credit Hours
          </label>
          <input
            type="text"
            value={values.credits}
            onChange={(e) => onChange({ ...values, credits: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Annual Intake
        </label>
        <input
          type="number"
          value={values.intake}
          onChange={(e) =>
            onChange({ ...values, intake: Number(e.target.value) })
          }
          className={inputCls}
        />
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <button
          onClick={onClose}
          className="px-4 py-2 text-sm border border-border text-foreground hover:bg-muted transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          disabled={!values.title.trim()}
          className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
}
