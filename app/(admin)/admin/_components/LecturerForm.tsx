import type { Lecturer, LecturerRank, LecturerStatus } from "@/db/schema";
import { inputCls, selectCls } from "@/components/admin/fieldStyles";

type FormValues = Omit<Lecturer, "id" | "updatedAt" | "image">;

type Props = {
  values: FormValues;
  onChange: (v: FormValues) => void;
  onSubmit: () => void;
  onClose: () => void;
  submitLabel: string;
};

export function LecturerForm({
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
          Full Name
        </label>
        <input
          type="text"
          value={values.name}
          onChange={(e) => onChange({ ...values, name: e.target.value })}
          placeholder="e.g. Dr. Jane Smith"
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Rank
          </label>
          <select
            value={values.rank}
            onChange={(e) =>
              onChange({ ...values, rank: e.target.value as LecturerRank })
            }
            className={selectCls}
          >
            <option>Professor</option>
            <option>Senior Lecturer</option>
            <option>Lecturer</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Status
          </label>
          <select
            value={values.status}
            onChange={(e) =>
              onChange({ ...values, status: e.target.value as LecturerStatus })
            }
            className={selectCls}
          >
            <option>Active</option>
            <option>On Leave</option>
            <option>Draft</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Role / Title
        </label>
        <input
          type="text"
          value={values.role}
          onChange={(e) => onChange({ ...values, role: e.target.value })}
          placeholder="e.g. Lecturer & Programme Coordinator"
          className={inputCls}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-muted-foreground mb-1.5">
          Research Area
        </label>
        <input
          type="text"
          value={values.research}
          onChange={(e) => onChange({ ...values, research: e.target.value })}
          className={inputCls}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => onChange({ ...values, email: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5">
            Publications
          </label>
          <input
            type="number"
            value={values.publications}
            onChange={(e) =>
              onChange({ ...values, publications: Number(e.target.value) })
            }
            className={inputCls}
          />
        </div>
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
          disabled={!values.name.trim()}
          className="px-4 py-2 text-sm bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
}
