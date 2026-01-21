'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Plus, Save, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { createSubject } from '@/app/services/subject/createSubject';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface ISubjectSlot {
  name: string;
  code: string;
}

const SubjectsManage = ({
  classId,
  onSuccess,
}: {
  classId: string;
  onSuccess: () => void;
}) => {
  const router = useRouter();
  const [subjects, setSubjects] = useState<ISubjectSlot[]>([]);
  const [currentName, setCurrentName] = useState('');
  const [currentCode, setCurrentCode] = useState('');
  const [isPending, setIsPending] = useState(false);

  const addSubjectToSlot = () => {
    if (!currentName.trim()) return;

    if (
      subjects.some((s) => s.name.toLowerCase() === currentName.toLowerCase())
    ) {
      toast.error('This subject is already in the list!');
      return;
    }

    setSubjects([
      ...subjects,
      { name: currentName.trim(), code: currentCode.trim() },
    ]);
    setCurrentName('');
    setCurrentCode('');
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const handleSaveAll = async () => {
    setIsPending(true);
    try {
      const payload = subjects.map((s) => ({ ...s, classId }));
      const res = await createSubject(payload);

      if (res.success) {
        toast.success(`${subjects.length} Subjects created successfully!`);
        router.refresh();
        onSuccess();
      } else {
        toast.error(res.message || 'Failed to save subjects');
      }
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="p-6 bg-card text-card-foreground rounded-xl border shadow-sm space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-muted/50 p-4 rounded-lg border border-dashed border-muted-foreground/20">
          <div className="md:col-span-7 space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase ml-1">
              Subject Name
            </label>
            <Input
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              placeholder="Mathematics, Physics..."
              onKeyDown={(e) => e.key === 'Enter' && addSubjectToSlot()}
              className="bg-background focus-visible:ring-ring"
            />
          </div>
          <div className="md:col-span-3 space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase ml-1">
              Code
            </label>
            <Input
              value={currentCode}
              onChange={(e) => setCurrentCode(e.target.value)}
              placeholder="MATH101"
              onKeyDown={(e) => e.key === 'Enter' && addSubjectToSlot()}
              className="bg-background"
            />
          </div>
          <div className="md:col-span-2">
            <Button
              onClick={addSubjectToSlot}
              type="button"
              variant="secondary" // Shadcn Secondary Style
              className="w-full shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <Plus className="w-4 h-4 mr-1" /> Add
            </Button>
          </div>
        </div>

        {/* List of Slots - Using Secondary/Muted colors */}
        <div className="min-h-[120px] border rounded-lg p-4 bg-muted/20">
          <AnimatePresence mode="popLayout">
            {subjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-2 py-6"
              >
                <Sparkles className="w-8 h-8 text-muted-foreground/40" />
                <p className="text-sm text-muted-foreground font-medium italic">
                  No subjects added to the list yet.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {subjects.map((sub, idx) => (
                  <motion.div
                    key={sub.name + idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="flex items-center gap-2 bg-secondary text-secondary-foreground pl-3 pr-1 py-1 rounded-md border border-border shadow-sm"
                  >
                    <span className="text-sm font-medium">{sub.name}</span>
                    {sub.code && (
                      <span className="text-[10px] bg-background px-1.5 py-0.5 rounded font-mono border">
                        {sub.code}
                      </span>
                    )}
                    <button
                      onClick={() => removeSubject(idx)}
                      className="p-1 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Button - Primary Branding */}
        {subjects.length > 0 && (
          <Button
            onClick={handleSaveAll}
            disabled={isPending}
            variant="default" // Shadcn Primary Style
            className="w-full h-11 text-sm font-semibold shadow-sm transition-all active:scale-[0.98]"
          >
            {isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save {subjects.length} Subjects
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubjectsManage;
