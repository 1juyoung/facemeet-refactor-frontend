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

interface JoinMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinMeetingDialog({ open, onOpenChange }: JoinMeetingDialogProps) {
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
              // value={meetingId}
              // onChange={(e) => setMeetingId(e.target.value)}
              placeholder="회의 ID를 입력하세요"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600"
            // onClick={handleJoinMeeting}
          >
            참가하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
