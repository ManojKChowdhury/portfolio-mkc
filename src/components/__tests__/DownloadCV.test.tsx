import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DownloadCV from '../DownloadCV';

describe('DownloadCV', () => {
  it('renders correctly', () => {
    render(<DownloadCV />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
    expect(screen.getByLabelText('Download CV')).toBeInTheDocument();
  });

  it('triggers download when clicked', () => {
    // Spy on methods used in handleDownload
    const createElementSpy = vi.spyOn(document, 'createElement');
    const appendChildSpy = vi.spyOn(document.body, 'appendChild');
    const removeChildSpy = vi.spyOn(document.body, 'removeChild');
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    
    render(<DownloadCV />);
    const button = screen.getByLabelText('Download CV');
    fireEvent.click(button);

    // Verify an anchor was created and configured
    expect(createElementSpy).toHaveBeenCalledWith('a');
    
    // We can find the anchor that was appended
    const anchor = appendChildSpy.mock.calls.find(call => call[0] instanceof HTMLAnchorElement)?.[0] as HTMLAnchorElement;
    expect(anchor).toBeDefined();
    expect(anchor.href).toContain('/cv.pdf');
    expect(anchor.download).toBe('Manoj_Kumar_Chowdhury_CV.pdf');
    
    expect(clickSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(anchor);

    // Cleanup
    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
    removeChildSpy.mockRestore();
    clickSpy.mockRestore();
  });
});
