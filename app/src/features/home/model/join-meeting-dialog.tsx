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
import { joinMeeting } from '@/app/src/entities/meeting/api/meetingApi';

interface JoinMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinMeetingDialog({ open, onOpenChange }: JoinMeetingDialogProps) {
  const router = useRouter();
  const [meetingId, setMeetingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleJoin = async () => {
    if (!meetingId.trim()) return;
    setError('');
    setLoading(true);
    try {
      await joinMeeting(meetingId.trim());
      onOpenChange(false);
      setMeetingId('');
      router.push(`/meeting/${meetingId.trim()}`);
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
          <DialogTitle>회의 참가</DialogTitle>
          <DialogDescription>회의 ID를 입력하여 기존 회의에 참가하세요.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="meetingId">회의 ID</Label>
            <Input
              id="meetingId"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
              placeholder="회의 ID를 입력하세요"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600"
            onClick={handleJoin}
            disabled={loading || !meetingId.trim()}
          >
            {loading ? '참가 중...' : '참가하기'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
