'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createMeeting } from '@/app/src/entities/meeting/api/meetingApi';

interface CreateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateMeetingDialog({ open, onOpenChange }: CreateMeetingDialogProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async () => {
    if (!title.trim()) return;
    setError('');
    setLoading(true);
    try {
      const meeting = await createMeeting({ title: title.trim() });
      onOpenChange(false);
      setTitle('');
      router.push(`/meeting/${meeting.id}`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>새 회의 생성</DialogTitle>
          <DialogDescription>새로운 회의를 생성하고 참가자를 초대하세요.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">회의 이름</Label>
            <Input
              id="name"
              placeholder="회의 이름을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600"
            onClick={handleCreate}
            disabled={loading || !title.trim()}
          >
            {loading ? '생성 중...' : '회의 생성'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
