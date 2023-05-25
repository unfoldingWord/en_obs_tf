import sys
import os

if len(sys.argv) < 3:
    print("Please provide two directory paths as command line arguments. The first should be the directory containing the markdown to transform. The second should be the output directory.")
    sys.exit(1)

source_dir = sys.argv[1]
output_dir = sys.argv[2]

if os.path.isdir(source_dir):
    for filename in os.listdir(source_dir):
        if os.path.isfile(os.path.join(source_dir, filename)):
            print(filename)
else:
    print("Invalid directory path.")