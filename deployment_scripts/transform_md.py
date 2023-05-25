import sys
import os

def build_yaml_map(source_dir):
    yaml_map = {}
    if os.path.isdir(source_dir):
        for filename in os.listdir(source_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(source_dir, filename)
                with open(file_path, "r") as file:
                    yaml_dash_line_count = 0
                    for line in file:
                        if yaml_dash_line_count == 2:
                            break
                        if '---' in line:
                            yaml_dash_line_count = yaml_dash_line_count + 1
                        if filename not in yaml_map:
                            yaml_map[filename] = []
                        yaml_map[filename].append(line)
    return yaml_map


if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Please provide two directory paths as command line arguments. The first should be the directory containing the markdown to transform. The second should be the output directory.")
        sys.exit(1)

    source_dir = sys.argv[1]
    output_dir = sys.argv[2]
    build_yaml_map(source_dir)
    print("successfully built yaml map.")

else:
    print("Invalid directory path.")